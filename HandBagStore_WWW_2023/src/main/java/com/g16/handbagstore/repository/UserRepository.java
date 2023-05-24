package com.g16.handbagstore.repository;

import com.g16.handbagstore.entity.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {
	@Query("from User where username = :username")
	User getUserByUserName(@Param("username") String username);
	@Query("from User where role = :role_value")
	List<User> getUsersByRole(@Param("role_value") String role);
	
	@Query("from User where gender = :gender")
	List<User> getUsersByGender(@Param("gender") String gender);
	
	@Query(value = "select top 5 * from users where "
			+ "last_name like :keyword or "
			+ "phone like :keyword or "
			+ "user_id like :keyword", nativeQuery = true)
	List<User> searchUserALikeByKeyWord(@Param("keyword") String keyword);
	@Query("from User where gender = :gender_value AND role = :role_value")
	List<User> getUsersByGender(@Param("role_value") String role, @Param("gender_value") String gender);
}