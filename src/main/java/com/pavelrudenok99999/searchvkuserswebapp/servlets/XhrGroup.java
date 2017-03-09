package com.pavelrudenok99999.searchvkuserswebapp.servlets;

import com.pavelrudenok99999.searchvkuser.main.Group;
import com.pavelrudenok99999.searchvkuser.main.SearchVkUsers;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Pavel on 08.03.2017.
 */
@WebServlet("/xhr/group")
public class XhrGroup extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String groupParam = request.getParameter("group");
        Group group = SearchVkUsers.getGroup(groupParam);

        String name = (group != null) ? group.getName() : "";

        response.getWriter().println(name);
    }
}
