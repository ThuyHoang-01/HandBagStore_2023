package com.g16.handbagstore.rest;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.g16.handbagstore.entity.SaleOrder;
import com.g16.handbagstore.service.impl.SaleOrderServiceImpl;
import com.g16.handbagstore.ultility.MyUltility;

@RestController
@RequestMapping("/api_sale_admin")
public class AdminSaleOrderRestController {

	@Autowired
	private SaleOrderServiceImpl saleOrderServiceImpl;

	@GetMapping("/satus_chart")
	public List<Integer> test(@RequestParam("option") int option) {

		LocalDate today = LocalDate.now();

		/**
		 * - Ngày hôm nay: 1 - Tuần này: 2 - Tháng này: 3
		 */

		List<SaleOrder> saleOrders = new ArrayList<>();

		if (option == 1)
			saleOrders = saleOrderServiceImpl.getSaleOrderToday(today.getDayOfMonth(), today.getMonthValue(),
					today.getYear());
		else if (option == 2)
			saleOrders = saleOrderServiceImpl.getSaleOrderThisWeek(getNgayDauTrongTuan(),
					dinhDangNgay(today.plusDays(1), "yyyy-MM-dd"));
		else if (option == 3)
			saleOrders = saleOrderServiceImpl.getSaleOrderThisMonth(today.getMonthValue(), today.getYear());

		return MyUltility.getOrderStatus(saleOrders);
	}
	
	private String getNgayDauTrongTuan() {
		LocalDate thuHai = LocalDate.now();

		while (thuHai.getDayOfWeek() != DayOfWeek.MONDAY)
			thuHai = thuHai.minusDays(1);

		return dinhDangNgay(thuHai, "yyyy-MM-dd");
	}

	private String dinhDangNgay(LocalDate ngay, String dinhDang) {
		return ngay.format(DateTimeFormatter.ofPattern(dinhDang));
	}
}