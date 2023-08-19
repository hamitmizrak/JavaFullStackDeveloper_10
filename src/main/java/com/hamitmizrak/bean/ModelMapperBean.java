package com.hamitmizrak.bean;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperBean {

    @Bean(initMethod = "firstBeforeBean",destroyMethod = "firstAfterBean")
    public ModelMapper modelMapperMethod(){
        return new ModelMapper();
    }
}
