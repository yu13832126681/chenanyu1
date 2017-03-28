package com.oos.service;

import java.util.List;

import com.oos.model.DishFavorite;
import com.oos.model.Member;
import com.oos.model.MemberAddress;
import com.oos.model.ShopFavorite;
import com.oos.util.PageBean;

public interface MemberService {

	// 通过username查找
	Member findByUsername(String username);

	// 通过email查找
	Member findByEmail(String email);

	// 保存注册会员信息
	String doReg(Member member);

	// 会员登陆，获取会员信息
	Member doLogin(Member member);

	// 重置密码
	void resetPassword(Member member);

	// 通过memberId获取店铺收藏信息
	List<ShopFavorite> getFByMemberId(Long memberId);

	// 取消店铺收藏，通过memberId和shopId删除店铺收藏表中数据
	void deleteByMSId(Long memberId, Long shopId);

	// 添加店铺收藏
	void addFavoriteShop(ShopFavorite shopFavorite);

	// 通过memberId和shopId查找店铺收藏表中数据
	ShopFavorite getByMSId(Long memberId, Long shopId);

	// 通过memberId获取收货地址信息
	List<MemberAddress> getAByMemberId(Long memberId);

	// 取消默认地址
	void deleteDefault(Integer isDefault);

	// 添加新地址
	void addressAdd(MemberAddress address);

	// 通过id获取地址信息
	MemberAddress getByAddressId(Integer id);

	// 通过id保存修改的地址信息
	void addressEditSave(MemberAddress address);

	// 通过id删除地址信息
	void addressRemove(Integer id);

	// 通过memberId获取菜品收藏的分页数据
	PageBean getDishFavoriteByMemberId(Long memberId, int pageIndex, int pageSize);

	// 取消菜品收藏，通过memberId和dishId删除菜品收藏表中数据
	void deleteByMDId(Long memberId, Long dishId);

	// 添加菜品收藏
	void addFavoriteDish(DishFavorite dishFavorite);
	
}
