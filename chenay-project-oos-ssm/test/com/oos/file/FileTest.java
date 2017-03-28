package com.oos.file;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.junit.Test;

/**
 * <pre>
 * 字节流对象 (字节数组)
 * 	InputStream(输入流),OutputStream(输出流) 		
 * 字符流对象 (字符串)
 * 	BufferedReader(输入流),BufferedWriter(输出流)
 * </pre
 * 
 */
public class FileTest {

	@Test
	public void test_println() {
		System.out.println("\n\n\naaa"); // ->System.out.print("\n\n\naaa");
		System.out.print("bbb");
	}

	@Test
	public void test_print() {
		System.out.print("\n\n\naaa");
		System.out.print("bbb");
	}

	@Test
	public void testInputStreamReadFile() {
		// 读取文件的字节流对象
		InputStream is = null;

		try {
			// 文件路径
			String filename = FileTest.class.getResource("/").toURI().getPath()
					+ FileTest.class.getPackage().getName()
							.replaceAll("\\.", "/") + "/dept_read";
			is = new FileInputStream(filename);

			// 字节数组
			byte[] buffer = new byte[128];

			int length = -1; // 读取文件读到的长度

			// InputStream的read(byte[] b,int off,int len)方法,
			// b -> 读取到的字节内容存放到 哪个 字节数组中
			// off -> 读取到的字节内容存放到字节数组中,从数组哪个下标位置开始存放,
			// len ->读取多大的长度
			// 方法的返回值,是最终读取的长度
			for (; (length = is.read(buffer, 0, buffer.length)) != -1;) {
				String s = new String(buffer, 0, length);
				System.out.print(s);
			}
		} catch (Exception e) {
			// TODO: handle exception
		} finally {
			if (is != null) {
				try {
					is.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}

	@Test
	public void testOutputStreamWriteFile() {

		String[] strs = new String[] {
				"1,aaa,aaa,aaa,aaa,2016-03-15 13:35:03,2016-03-15 13:59:59",
				"2,sdaf,asdfas,dfadsf,asdfas,2016-03-15 13:59:52,NULL",
				"3,11,11,11,11,NULL,NULL",
				"4,23,33,333,33,NULL,NULL",
				"7,sdafasd1,fasdf1,asdfasdf1,sadfads1,2016-03-15 13:35:03,2016-03-15 13:59:59",
				"8,sdaf,asdfas,dfadsf,asdfas,2016-03-15 13:59:52,NULL",
				"9,11,11,11,11,NULL,NULL", "10,23,33,333,33,NULL,NULL",
				"16,sdfasd,sdafasd,dsafasd,asdfasd,NULL,NULL",
				"17,sdfasd,sdafasd,dsafasd,asdfasd,NULL,NULL" };

		// 读取文件的字节流对象
		OutputStream out = null;

		try {
			// 文件所在的目录的路径
			String filedir = FileTest.class.getResource("/").toURI().getPath()
					+ FileTest.class.getPackage().getName()
							.replaceAll("\\.", "/");
			// 文件路径
			String filename = filedir + "/dept_write_2";
			// 文件对象,java.io.File
			File file = new File(filename);

			// 如果文件不存在,创建文件
			if (!file.exists()) {
				// 先判断目录是否存在,不存在,先创建目录
				File dir = new File(filedir);
				dir.mkdirs();
				// 创建文件
				file.createNewFile();
			}

			out = new FileOutputStream(filename);

			for (int i = 0; i < strs.length; i++) {
				String line = strs[i] + "\n";
				byte[] bytes = line.getBytes();
				out.write(bytes);
			}

		} catch (Exception e) {
			// TODO: handle exception
		} finally {
			if (out != null) {
				try {
					out.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}

	@Test
	public void testBufferedReaderReadFile() {
		/**
		 * id,dname,ddesc,leader,loc,create_time,modify_time
		 */
		// 读取文件的对象BufferedReader
		BufferedReader br = null;
		try {
			// 文件路径
			String filename = FileTest.class.getResource("/").toURI().getPath()
					+ FileTest.class.getPackage().getName()
							.replaceAll("\\.", "/") + "/dept_read";
			// 文件对象,java.io.File
			File file = new File(filename);
			br = new BufferedReader(new FileReader(file));
			String line = null;// 存放读取文件的一行内容的字符串变量
			// BufferedReader的readLine方法是读取一行内容,得到的结果是字符串
			for (; (line = br.readLine()) != null;) {
				System.out.println(line);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null) {
					br.close();
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	@Test
	public void testBufferedWriterWriteFile() {
		String[] strs = new String[] {
				"1,aaa,aaa,aaa,aaa,2016-03-15 13:35:03,2016-03-15 13:59:59",
				"2,sdaf,asdfas,dfadsf,asdfas,2016-03-15 13:59:52,NULL",
				"3,11,11,11,11,NULL,NULL",
				"4,23,33,333,33,NULL,NULL",
				"7,sdafasd1,fasdf1,asdfasdf1,sadfads1,2016-03-15 13:35:03,2016-03-15 13:59:59",
				"8,sdaf,asdfas,dfadsf,asdfas,2016-03-15 13:59:52,NULL",
				"9,11,11,11,11,NULL,NULL", "10,23,33,333,33,NULL,NULL",
				"16,sdfasd,sdafasd,dsafasd,asdfasd,NULL,NULL",
				"17,sdfasd,sdafasd,dsafasd,asdfasd,NULL,NULL" };

		// 写入文件的对象BufferedWriter
		BufferedWriter bw = null;
		try {
			// 文件所在的目录的路径
			String filedir = FileTest.class.getResource("/").toURI().getPath()
					+ FileTest.class.getPackage().getName()
							.replaceAll("\\.", "/");
			// 文件路径
			String filename = filedir + "/dept_write";
			// 文件对象,java.io.File
			File file = new File(filename);

			// 如果文件不存在,创建文件
			if (!file.exists()) {
				// 先判断目录是否存在,不存在,先创建目录
				File dir = new File(filedir);
				dir.mkdirs();
				// 创建文件
				file.createNewFile();
			}

			bw = new BufferedWriter(new FileWriter(file));
			for (int i = 0; i < strs.length; i++) {
				String line = strs[i] + "\n";
				// BufferedWriter的write方法是写入内容,得到的结果是字符串
				bw.write(line);
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (bw != null) {
					bw.close();
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
