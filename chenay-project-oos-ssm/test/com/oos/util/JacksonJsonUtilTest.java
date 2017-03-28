package com.oos.util;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;

public class JacksonJsonUtilTest {

	@Test
	public void testJson2Object() {

		Map<String, Object> res = new HashMap<String, Object>();
		res.put("total", 32);
		res.put("totalPage", 2);
		res.put("pageIndex", 0);
		res.put("pageSize", 20);
		res.put("previousIndex", 0);
		res.put("nextPageIndex", 1);
		res.put("lastPageIndex", 1);

		List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
		res.put("data", data);

		Map<String, Object> data_ele = new HashMap<String, Object>();
		data.add(data_ele);
		data_ele.put("id", 1);

		Map<String, Object> member = new HashMap<String, Object>();
		data_ele.put("member", member);
		member.put("id", 1);

		member.put("username", "fsdafasd");
		member.put("password", "fads");
		member.put("email", "fsadfs");
		member.put("isSeller", null);
		member.put("isForbidden", null);
		member.put("isFrozen", null);
		member.put("regTime", null);
		member.put("activateTime", null);
		member.put("loginTime", null);
		member.put("loginIp", null);
		member.put("modifyTime", null);
		
		
		data_ele.put("sname" , "沙县1");            
		data_ele.put("address" , "沙县");         
		data_ele.put("tel" , "010-88888888");     
		data_ele.put("status" , 1);               
		data_ele.put("freight" , 10.0);          
		data_ele.put("freeFreightAmount" , 20.0);  
		data_ele.put("waitMinutes" , 90);         
		data_ele.put("createTime" , "2015-12-29");
		data_ele.put("modifyTime" , "2015-12-29");  

		String json = JacksonJsonUtil.object2Json(res);
		System.out.println(json);
	}

	@Test
	public void testObject2Json() {
		fail("Not yet implemented");
	}

}

//var res = {
//		"total" : 32,
//		"totalPage" : 2,
//		"pageIndex" : 0,
//		"pageSize" : 20,
//		"previousIndex" : 0,
//		"nextPageIndex" : 1,
//		"lastPageIndex" : 1,
//		"data" : [ {
//			"id" : 1,
//			"member" : {
//				"id" : 1,
//				"username" : "fsdafasd",
//				"password" : "fads",
//				"email" : "fsadfs",
//				"isSeller" : null,
//				"isForbidden" : null,
//				"isFrozen" : null,
//				"regTime" : null,
//				"activateTime" : null,
//				"loginTime" : null,
//				"loginIp" : null,
//				"modifyTime" : null
//			},
//			"sname" : "沙县1",
//			"address" : "沙县",
//			"tel" : "010-88888888",
//			"status" : 1,
//			"freight" : 10.0,
//			"freeFreightAmount" : 20.0,
//			"waitMinutes" : 90,
//			"createTime" : "2015-12-29",
//			"modifyTime" : "2015-12-29"
//		}]
//	};