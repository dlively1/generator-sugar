<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');

$viewdefs<% if(! isGlobal){%> ['<%= moduleView %>'] <% } %>['base']['layout']['<%=name%>'] = array(
    //@todo - Define Your metadata here
    'components' =>
        array(
            array(
                'view' => '', //@todo -- define view
                'primary' => true,
            ),
        ),
    'type' => 'simple',
    'name' => '<%=name%>',
    'span' => 12,

);