package com.g16.handbagstore.service.impl;

import java.util.List;

import com.g16.handbagstore.entity.User;
import com.g16.handbagstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.g16.handbagstore.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User getUserByUserName(String username) {
		return userRepo.getUserByUserName(username);
	}

	@Override
	public void addOrUpdateUser(User newUser) {
		newUser.setPassword(new BCryptPasswordEncoder().encode(newUser.getPassword()));
		userRepo.save(newUser);
	}

	@Override
	public User getUserByUserID(int userID) {
		return userRepo.findById(userID).get();
	}

	@Override
	public void updateOldUser(User user) {
		userRepo.save(user);
	}

	@Override
	public List<User> getUsersByRole(String role) {
		return userRepo.getUsersByRole(role);
 }
  
  @Override
	public List<User> getUsersByGender(String gender) {
		return userRepo.getUsersByGender(gender);
	}

	@Override
	public List<User> searchUserALikeByKeyWord(String keyword) {
		return userRepo.searchUserALikeByKeyWord("%" + keyword + "%");
	}

	@Override
	public List<User> getUsersByGender(String role, String gender) {
		return userRepo.getUsersByGender(role, gender);
	}
}