package com.g16.handbagstore.components;

import org.springframework.stereotype.Component;

import java.text.DecimalFormat;

@Component
public class PriceConvert {

    public String chuyenMoney(double money){
        DecimalFormat df = new DecimalFormat("#,##0.0");
        String s = df.format(money);
        return s;
    }
}
