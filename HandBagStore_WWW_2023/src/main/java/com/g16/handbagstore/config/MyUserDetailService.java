package com.g16.handbagstore.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.g16.handbagstore.service.impl.UserServiceImpl;

@Service
public class MyUserDetailService implements UserDetailsService{

	@Autowired
	private UserServiceImpl userServiceImpl;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return new MyUserDetail(userServiceImpl.getUserByUserName(username));
	}
}