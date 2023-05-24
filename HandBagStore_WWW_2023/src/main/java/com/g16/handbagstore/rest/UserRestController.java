package com.g16.handbagstore.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.g16.handbagstore.entity.User;
import com.g16.handbagstore.service.impl.UserServiceImpl;
import com.g16.handbagstore.ultility.MyUltility;

@RestController
@RequestMapping("/api_customer_admin")
public class UserRestController {

	@Autowired
	private UserServiceImpl userServiceImpl;

	@GetMapping("/status_chart")
	public List<Integer> getUserChart() {
		return MyUltility.getUserGenderAmount(userServiceImpl.getAllUsers());
	}

	@GetMapping("/search")
	public List<String> search(@RequestParam String keyword) {
 
		List<User> users = userServiceImpl.searchUserALikeByKeyWord(keyword);

		List<String> res = new ArrayList<>();

		users.forEach(user -> {
			res.add(String.format("{\"cusID\":%d, \"phone\":\"%s\", \"firstName\":\"%s\" ,\"lastName\":\"%s\" }", user.getCustomerId(),
					user.getPhone(), user.getFirstName(), user.getLastName()));
		});

		return res;
	}
}