package com.oos.service.impl;

import java.util.HashMap;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oos.mapper.DishFavoriteMapper;
import com.oos.mapper.MemberAddressMapper;
import com.oos.mapper.MemberMapper;
import com.oos.mapper.ShopFavoriteMapper;
import com.oos.model.DishFavorite;
import com.oos.model.Member;
import com.oos.model.MemberAddress;
import com.oos.model.ShopFavorite;
import com.oos.service.MemberService;
import com.oos.util.EncryptUtil;
import com.oos.util.PageBean;

@Transactional(rollbackFor = Exception.class)
@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberMapper memberMapper;
	@Autowired
	ShopFavoriteMapper shopFavoriteMapper;
	@Autowired
	MemberAddressMapper memberAddressMapper;
	@Autowired
	DishFavoriteMapper dishFavoriteMapper;

	
	public Member findByUsername(String username) {
		return memberMapper.findByUsername(username);
	}

	
	public Member findByEmail(String email) {
		return memberMapper.findByEmail(email);
	}

	
	public String doReg(Member member) {
		// 校验用户名：1.是否为空；2.是否存在。
		String username = member.getUsername();
		if (StringUtils.isEmpty(username)) {
			return "注册失败,用户名为空";
		}
		Member memberOfUsername = findByUsername(username);
		if (memberOfUsername != null) {
			return "注册失败,用户名已经存在";
		}

		// 校验邮箱：1.是否为空；2.是否存在。
		String email = member.getEmail();
		if (StringUtils.isEmpty(email)) {
			return "注册失败,邮箱为空";
		}
		Member memberOfEmail = findByEmail(email);
		if (memberOfEmail != null) {
			return "注册失败,邮箱已经存在";
		}

		// 密码使用md5加密
		String password = member.getPassword();
		password = EncryptUtil.md5(password);
		member.setPassword(password);

		// 保存注册信息
		memberMapper.insertSelective(member);
		return null;
	}

	
	public Member doLogin(Member member) {
		String username = member.getUsername();
		String password = member.getPassword();
		// 校验页面填写的用户名和密码是否为空
		if (StringUtils.isEmpty(username) || StringUtils.isEmpty(password)) {
			return null;
		}
		// 比较两个密码是否相同
		Member memberOfDB = findByUsername(username);
		String passwordOfDB = memberOfDB.getPassword();
		password = EncryptUtil.md5(password);
		if (!password.equalsIgnoreCase(passwordOfDB)) {
			return null;
		}
		return memberOfDB;
	}

	
	public void resetPassword(Member member) {
		Member memberDB = memberMapper.findByUsername(member.getUsername());
		String password = member.getPassword();
		password = EncryptUtil.md5(password);
		memberDB.setPassword(password);
		memberMapper.updateByPrimaryKeySelective(memberDB);

	}

	
	public List<ShopFavorite> getFByMemberId(Long memberId) {
		return shopFavoriteMapper.getByMemberId(memberId);
	}

	
	public void deleteByMSId(Long memberId, Long shopId) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("memberId", memberId);
		map.put("shopId", shopId);
		shopFavoriteMapper.deleteByMSId(map);
	}

	
	public void addFavoriteShop(ShopFavorite shopFavorite) {
		shopFavoriteMapper.insertSelective(shopFavorite);

	}

	
	public ShopFavorite getByMSId(Long memberId, Long shopId) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("memberId", memberId);
		map.put("shopId", shopId);
		ShopFavorite shopFavorite = shopFavoriteMapper.getByMSId(map);
		return shopFavorite;
	}

	
	public List<MemberAddress> getAByMemberId(Long memberId) {
		return memberAddressMapper.getByMemberId(memberId);
	}

	
	public void deleteDefault(Integer isDefault) {
		memberAddressMapper.deleteDefault(isDefault);

	}

	
	public void addressAdd(MemberAddress address) {
		memberAddressMapper.insertSelective(address);

	}

	
	public MemberAddress getByAddressId(Integer id) {
		return memberAddressMapper.selectByPrimaryKey(id);
	}

	
	public void addressEditSave(MemberAddress address) {
		memberAddressMapper.updateByPrimaryKeySelective(address);

	}

	
	public void addressRemove(Integer id) {
		memberAddressMapper.deleteByPrimaryKey(id);

	}

	
	public PageBean getDishFavoriteByMemberId(Long memberId, int pageIndex, int pageSize) {
		int total = dishFavoriteMapper.getTotalByMemberId(memberId);
		PageBean pb = new PageBean(total, pageIndex, pageSize);

		pageIndex = pb.getPageIndex();
		pageSize = pb.getPageSize();

		HashMap<String, Object> map = new HashMap<String, Object>();

		map.put("memberId", memberId);

		map.put("orderByClause", "id");
		map.put("start", pageIndex * pageSize);
		map.put("limit", pageSize);

		List<DishFavorite> list = dishFavoriteMapper.getPageByMemberId(map);
		pb.setData(list);

		return pb;
	}

	
	public void deleteByMDId(Long memberId, Long dishId) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("memberId", memberId);
		map.put("dishId", dishId);
		dishFavoriteMapper.deleteByMDId(map);
	}

	
	public void addFavoriteDish(DishFavorite dishFavorite) {
		dishFavoriteMapper.insertSelective(dishFavorite);

	}
}
