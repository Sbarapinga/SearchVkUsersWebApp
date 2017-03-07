package com.pavelrudenok99999.searchvkuserswebapp.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Pavel on 07.03.2017.
 */
@WebServlet("/aaaaa")
public class ServletIndex extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("a", 10);
        request.getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
