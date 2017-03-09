<%--
  Created by IntelliJ IDEA.
  User: Pavel
  Date: 09.03.2017
  Time: 4:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@ page import="java.util.Set" %>

<html>
<head>
    <link rel="stylesheet" href="webjars/bootstrap/3.3.7-1/css/bootstrap.min.css">
    <link rel="stylesheet" href="webjars/bootstrap/3.3.7-1/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/common.css">
    <title>Результаты</title>
</head>
<body>
<c:choose>
    <c:when test="${empty users}">
        Пользователей не найдено.
    </c:when>
    <c:when test="${not empty users}">
        ${users}
    </c:when>
</c:choose>

<script src="webjars/jquery/1.11.1/jquery.min.js"></script>
<script src="webjars/bootstrap/3.3.7-1/js/bootstrap.min.js"></script>
<script src="js/common.js"></script>
</body>
</html>
