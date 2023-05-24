package com.g16.handbagstore.controller;

import com.g16.handbagstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/aboutus")
public class AboutusController {
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public String showAboutusPage(Model model){
        UserSession.getLoggedUserInfo(userService, model);

        model.addAttribute("pageTitle", "Về chúng tôi");
        return "view_customer/aboutus";
    }
}
