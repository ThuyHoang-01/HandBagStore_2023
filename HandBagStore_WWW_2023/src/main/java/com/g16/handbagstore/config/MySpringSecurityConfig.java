package com.g16.handbagstore.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.firewall.StrictHttpFirewall;

@Configuration
@EnableWebSecurity
public class MySpringSecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private UserDetailsService detailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(detailsService);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/static/**").permitAll();

		http.authorizeRequests().
		antMatchers("/products/product/add_to_cart/**").hasRole("USER")
				.antMatchers("/cart/**").hasRole("USER")
				.antMatchers("/admin/**").hasRole("ADMIN")
				.and()
					.formLogin()
					.loginPage("/login")
					.usernameParameter("email")
					.passwordParameter("password")
					.loginProcessingUrl("/authenUser")
					.defaultSuccessUrl("/")
				.and()
					.logout()
					.logoutUrl("/pa/logout")
					.logoutSuccessUrl("/")
					.deleteCookies("JSESSIONID").permitAll()
				.and()
					.rememberMe()
	                .rememberMeParameter("remember")
				.and()
					.cors()
				.and()
					.csrf().disable();
	}
	
	@Bean
	public HttpFirewall configureFirewall() {
		StrictHttpFirewall strictHttpFirewall = new StrictHttpFirewall();
		
		strictHttpFirewall.setAllowUrlEncodedDoubleSlash(true);
		strictHttpFirewall.setAllowUrlEncodedSlash(true);

		return strictHttpFirewall;
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}