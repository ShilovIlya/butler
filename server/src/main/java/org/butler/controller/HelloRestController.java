package org.butler.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloRestController {

    @RequestMapping("/api/hello")
    public String getHello() {
        return "Hello form butler server side!";
    }
}
