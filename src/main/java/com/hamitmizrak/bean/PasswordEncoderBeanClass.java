package com.hamitmizrak.bean;

import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

// LOMBOK
@Log4j2 // for log

// @Configuration: Classın Bean nesnesi olması için kullanıyoruz.
@Configuration
public class PasswordEncoderBeanClass {

    //FIRST
    public void passwordEncoderBeforeBeanMethod(){
        log.info("password Encoder Before Bean başladı");
        System.out.println("password Encoder Before Bean başladı");
    }

    // PasswordEncoder
    @Bean
    public PasswordEncoder passwordEncoderMethod(){
        return new BCryptPasswordEncoder();
    }


    //LAST
    public void passwordEncoderAfterBeanMethod(){
        log.info("password Encoder After Bean bitti");
        System.out.println("password Encoder After Bean bitti");
    }
}
