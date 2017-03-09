package com.pavelrudenok99999.searchvkuserswebapp.servlets;

import com.pavelrudenok99999.searchvkuser.main.SearchVkUsers;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.Map;
import java.util.Set;

/**
 * Created by Pavel on 09.03.2017.
 */
@WebServlet("/search")
public class SearchServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Map<String, String[]> paramsMap = request.getParameterMap();
        Set<String> users = new SearchVkUsers(Arrays.asList(paramsMap.get("group"))).searchUsers();
        request.setAttribute("users", users);
        getServletContext().getRequestDispatcher("/result.jsp").forward(request, response);
    }
}
