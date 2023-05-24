package com.g16.handbagstore.controller;

import java.util.List;

import com.g16.handbagstore.entity.User;
import com.g16.handbagstore.service.UserService;
import com.g16.handbagstore.ultility.MyUltility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/customers")
public class AdminCustomerController {
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public String showCustomersManagersPage(Model model){

        UserSession.getLoggedUserInfo(userService, model);

        List<User> listUsers = userService.getUsersByRole("USER");
        model.addAttribute("users", listUsers);

        model.addAttribute("pageTitle", "G16 - Quản lí khách hàng");
        model.addAttribute("customerViewOption", "Tất cả khách hàng");
        addUserGenderAmount(model, listUsers);

        return "/view_admin/customers_manager";
    }

    private void addUserGenderAmount(Model model, List<User> users) {
        List<Integer> userGenderAmount = MyUltility.getUserGenderAmount(users);
        model.addAttribute("userGenderTotal", userGenderAmount.get(0));
        model.addAttribute("userGenderMale", userGenderAmount.get(1));
        model.addAttribute("userGenderFemale", userGenderAmount.get(2));
    }
    @GetMapping("/male")
    public String showMaleCustomers(Model model){

        UserSession.getLoggedUserInfo(userService, model);

        List<User> listUsers = userService.getUsersByGender("USER", "Nam");
        model.addAttribute("users", listUsers);
        addUserGenderAmount(model, listUsers);
        model.addAttribute("pageTitle", "G16 - Quản lí khách hàng");
        model.addAttribute("customerViewOption", "Khách hàng nam");
        return "/view_admin/customers_manager";
    }
    @GetMapping("/female")
    public String showFemaleCustomers(Model model){

        UserSession.getLoggedUserInfo(userService, model);

        List<User> listUsers = userService.getUsersByGender("USER", "Nữ");
        model.addAttribute("users", listUsers);
        addUserGenderAmount(model, listUsers);
        model.addAttribute("pageTitle", "G16 - Quản lí khách hàng");
        model.addAttribute("customerViewOption", "Khách hàng nữ");
        return "/view_admin/customers_manager";
    }
}