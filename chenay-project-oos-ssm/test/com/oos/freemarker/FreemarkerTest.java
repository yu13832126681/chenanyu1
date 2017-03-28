package com.oos.freemarker;

import java.io.File;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.LinkedHashMap;

import org.junit.Test;

import freemarker.template.Configuration;
import freemarker.template.Template;

public class FreemarkerTest {

	
	@Test
	public void testMap(){
		Configuration cfg = new Configuration();
		try {
			String path = FreemarkerTest.class.getResource("/").toURI().getPath();
			String pkg = FreemarkerTest.class.getPackage().getName();
			String pkgPath = pkg.replaceAll("\\.", "/");
			String filepath = path+pkgPath;
			cfg.setDirectoryForTemplateLoading(new File(filepath));
			
			Template template = cfg.getTemplate("map.ftl");
			
			HashMap<String, Object> root = new HashMap<String, Object>();
			LinkedHashMap<String, Object> data = new LinkedHashMap<String, Object>();
			data.put("key1", "value1");
			data.put("key2", "value2");
			root.put("map", data);
			
			Writer out = new OutputStreamWriter(System.out);
			
			template.process(root, out);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@Test
	public void testArr(){
		Configuration cfg = new Configuration();
		try {
			String path = FreemarkerTest.class.getResource("/").toURI().getPath();
			String pkg = FreemarkerTest.class.getPackage().getName();
			String pkgPath = pkg.replaceAll("\\.", "/");
			String filepath = path+pkgPath;
			cfg.setDirectoryForTemplateLoading(new File(filepath));
			
			Template template = cfg.getTemplate("arr.ftl");
			
			HashMap<String, Object> root = new HashMap<String, Object>();
			LinkedHashMap<String, Object> data = new LinkedHashMap<String, Object>();
			data.put("key1", "value1");
			data.put("key2", "value2");
			root.put("map", data);
			
			Writer out = new OutputStreamWriter(System.out);
			
			template.process(root, out);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
