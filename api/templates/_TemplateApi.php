<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');
require_once('include/api/SugarApi.php');

class <%=className%> extends SugarApi {

    public function registerApiRest()
    {
        return array(
            'endPointName' => array(
                'reqType' => 'GET', //@todo -- define request type (GET,POST,PUT,DELETE)
                'path' => array(''), //@todo -- define path
                'pathVars' => array(), //@todo - define path variables based on defined path
                'method' => 'doSomethingAwesome',
                'shortHelp' => '', //@todo -- define description for API
                'longHelp' => '', //@todo -- create html documentation for endpoint
            )
        );
    }


    public function doSomethingAwesome(ServiceBase $api, array $args)
    {

    }

}