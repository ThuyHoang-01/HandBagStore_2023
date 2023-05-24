package com.g16.handbagstore.service;

import java.util.List;

import com.g16.handbagstore.entity.User;

public interface UserService {
	List<User> getAllUsers();
	List<User> getUsersByGender(String gender);
	User getUserByUserID(int userID);
	User getUserByUserName(String username);
	void addOrUpdateUser(User newUser);
	void updateOldUser(User user);
	List<User> getUsersByRole(String role);
	List<User> searchUserALikeByKeyWord(String keyword);
	List<User> getUsersByGender(String role, String gender);
}