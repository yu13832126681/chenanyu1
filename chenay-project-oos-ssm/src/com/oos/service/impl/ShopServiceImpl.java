package com.oos.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oos.mapper.NetOrderMapper;
import com.oos.mapper.ShopMapper;
import com.oos.model.NetOrder;
import com.oos.model.Shop;
import com.oos.model.ShopExample;
import com.oos.service.ShopService;
import com.oos.util.PageBean;

@Transactional(rollbackFor = Exception.class)
@Service
public class ShopServiceImpl implements ShopService {

	@Autowired
	private ShopMapper shopMapper;
	@Autowired
	private NetOrderMapper netOrderMapper;

	
	public PageBean getByPage(int pageIndex, int pageSize) {
		ShopExample example = new ShopExample();
		int total = shopMapper.countByExample(null);
		PageBean pb = new PageBean(total, pageIndex, pageSize);
		example.setPageIndex(pb.getPageIndex() * pb.getPageSize());
		example.setPageSize(pb.getPageSize());
		List<Shop> list = shopMapper.selectPage(example);
		pb.setData(list);
		return pb;
	}

	
	public Shop getById(Long id) {
		return shopMapper.selectByPrimaryKey(id);
	}

	// 通过shopId获取店铺的总销量(?)
	
	public int getSaleNumByShopId(Long shopId) {
		List<NetOrder> list = netOrderMapper.getSaleNumByShopId(shopId);
		int saleNum = 0;
		for (int i = 0; i < list.size(); i++) {
			saleNum += list.get(i).getQty();
		}
		return saleNum;
	}

	// 通过MemberId获取shop信息
	
	public Shop getShopByMemberId(Long memberId) {
		return shopMapper.getByMemberId(memberId);
	}

	
	public void update(Shop shop) {
		shopMapper.updateByPrimaryKeySelective(shop);

	}

}
