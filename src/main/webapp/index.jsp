<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <link rel="stylesheet" href="webjars/bootstrap/3.3.7-1/css/bootstrap.min.css">
    <link rel="stylesheet" href="webjars/bootstrap/3.3.7-1/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/common.css">
    <title>Поиск людей по общим группам</title>
</head>
<body>
<div class="container-fluid">
    <form method="GET" action="/search" id="input-groups-form">
        <div id="input-groups">
        </div>
        <button type="button" id="add-group" class="btn btn-primary">Добавить</button>
        <button type="submit" class="btn btn-primary">Искать</button>
    </form>
</div>
<script src="webjars/jquery/1.11.1/jquery.min.js"></script>
<script src="webjars/bootstrap/3.3.7-1/js/bootstrap.min.js"></script>
<script src="js/common.js"></script>
</body>
</html>
