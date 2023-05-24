package com.g16.handbagstore.controller;

import com.g16.handbagstore.entity.CartHeader;
import com.g16.handbagstore.entity.User;
import com.g16.handbagstore.service.CartHeaderService;
import com.g16.handbagstore.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.math.BigDecimal;

@Controller
@RequestMapping("/register")
public class RegisterController {
	
	@Autowired
	private UserServiceImpl userServiceImpl;
	@Autowired
	private CartHeaderService cartHeaderService;

	@GetMapping("/all")
	public String showRegisterPage(Model model){
		model.addAttribute("pageTitle", "Đăng kí tài khoản");
		return "view_customer/register";
	}
	
	@PostMapping("/regis")
	public String register(@ModelAttribute User user) {
		
		if(userServiceImpl.getUserByUserName(user.getUsername()) != null)
			return "redirect:/register/all?error";
		
		user.setEmail("");
		user.setGender("Nam");
		user.setAddress("");
		user.setPhone("");
		user.setAvatar("");
		user.setRole("USER");
		CartHeader cartHeader = new CartHeader(new BigDecimal(0),0,user);

		userServiceImpl.addOrUpdateUser(user);
		cartHeaderService.addOrUpdateCartHeader(cartHeader);
		
		return "redirect:/login";
	}
}