package com.oos.service;

import com.oos.model.Shop;
import com.oos.util.PageBean;

public interface ShopService {

	PageBean getByPage(int pageIndex, int pageSize);

	Shop getById(Long id);

	int getSaleNumByShopId(Long shopId);

	// 通过MemberId获取shop信息
	Shop getShopByMemberId(Long memberId);

	// 保存修改的店铺基本信息
	void update(Shop shop);

	
}
