package com.chat;

import com.chat.configuration.JpaConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages = {"com.chat"})
public class SpringBootChatApp {
	public static void main(String[] args) {
		SpringApplication.run(SpringBootChatApp.class, args);
	}
}