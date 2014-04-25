<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');

$viewdefs<% if(! isGlobal){%> ['<%= moduleView %>'] <% } %>['base']['view']['<%=name%>'] = array(

    //Define Your metadata here

);