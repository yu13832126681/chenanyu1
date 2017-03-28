package com.oos.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oos.mapper.DishFavoriteMapper;
import com.oos.mapper.DishMapper;
import com.oos.model.Dish;
import com.oos.model.DishFavorite;
import com.oos.model.Shop;
import com.oos.service.DishService;
import com.oos.util.PageBean;

@Transactional(rollbackFor = Exception.class)
@Service
public class DishServiceImpl implements DishService {

	@Autowired
	private DishMapper dishMapper;
	@Autowired
	private DishFavoriteMapper dishFavoriteMapper;

	// 获取店铺首页菜单的分页数据
	
	public PageBean getByPage(Long shopId, int pageIndex, int pageSize) {
		int total = dishMapper.getTotalByShopId(shopId);

		PageBean pb = new PageBean(total, pageIndex, pageSize);

		pageIndex = pb.getPageIndex();
		pageSize = pb.getPageSize();

		HashMap<String, Object> map = new HashMap<String, Object>();

		map.put("shopId", shopId);

		map.put("orderByClause", "id");
		map.put("start", pageIndex * pageSize);
		map.put("limit", pageSize);

		List<Dish> list = dishMapper.getByPage(map);
		pb.setData(list);

		return pb;
	}

	// 通过菜品id获取菜品
	
	public Dish getById(Long id) {
		// return dishMapper.selectByPrimaryKey(id);
		return dishMapper.getByDishId(id);
	}

	// 查询店铺首页菜品的分页数据，过滤掉已删除的和下架的菜品。
	
	public PageBean getByCondition(Long shopId, Integer isDeleted, Integer status, int pageIndex,
			int pageSize, Long memberId) {

		HashMap<String, Object> mapTotal = new HashMap<String, Object>();
		mapTotal.put("shopId", shopId);
		mapTotal.put("isDeleted", isDeleted);
		mapTotal.put("status", status);
		int total = dishMapper.getTotalByCondition(mapTotal);

		PageBean pb = new PageBean(total, pageIndex, pageSize);
		pageIndex = pb.getPageIndex();
		pageSize = pb.getPageSize();

		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("shopId", shopId);
		map.put("isDeleted", isDeleted);
		map.put("status", status);
		map.put("orderByClause", "id");
		map.put("start", pageIndex * pageSize);
		map.put("limit", pageSize);
		List<Dish> list = dishMapper.getByCondition(map);

		// 判断是否已经收藏
		if (memberId != null) {
			for (int i = 0; i < list.size(); i++) {
				Dish dish = list.get(i);
				Long dishId = dish.getId();
				HashMap<String, Object> map1 = new HashMap<String, Object>();
				map1.put("dishId", dishId);
				map1.put("memberId", memberId);
				DishFavorite dishFavorite = dishFavoriteMapper.selectByMDId(map1);
				if (dishFavorite != null) {
					dish.setFavorite(true);
				} else {
					dish.setFavorite(false);
				}
			}
			pb.setData(list);
		} else {
			pb.setData(list);
		}
		//

		return pb;
	}

	// 保存添加的菜品数据
	
	public void addSave(Dish dish) {
		Date now = new Date();
		if (Integer.valueOf(1).equals(dish.getStatus())) {
			dish.setOnSaleDate(now);
		}
		dish.setIsDeleted(0);
		dish.setCreateTime(now);
		dishMapper.insertSelective(dish);

	}

	// 保存修改的菜品数据
	
	public String update(Dish dish, Shop shop) {
		Dish oldDish = dishMapper.selectByPrimaryKey(dish.getId());
		// 1.判断修改的菜品是否是会员关联的店铺下的菜品
		if (shop == null || !shop.getId().equals(oldDish.getShopId())) {
			return "操作被拒绝,您没有权限";
		}
		// 2.被删除的菜品不能修改(被删除还能到这一步？)
		if (Integer.valueOf(1).equals(oldDish.getIsDeleted())) {
			return "操作被拒绝,菜品已经被删除";
		}
		// 3.如果菜品之前未上架,本次修改将菜品上架,应该设置上架时间
		Date now = new Date();
		if (oldDish.getOnSaleDate() == null && Integer.valueOf(1).equals(dish.getStatus())) {
			oldDish.setOnSaleDate(now);
		}
		dishMapper.updateByPrimaryKeySelective(dish);
		return null;
	}

	// 删除菜品
	
	public String delete(Long dishId, Shop shop) {
		Dish oldDish = dishMapper.selectByPrimaryKey(dishId);
		// 1.判断修改的菜品是否是会员关联的店铺下的菜品
		if (shop == null || !shop.getId().equals(oldDish.getShopId())) {
			return "操作被拒绝,您没有权限";
		}
		// 2.设置 删除状态 为 已删除,逻辑删除
		oldDish.setIsDeleted(1);
		dishMapper.updateByPrimaryKeySelective(oldDish);
		return null;
	}

}
