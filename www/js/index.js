/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    vars: {
        introDone: true,
        deviceReady: false
    },
    initialize: function() {
        this.bindEvents();
        this.intro();
        //debug.init();
        //debug.show();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.vars.deviceReady = true;
        debug.log('device ready');
        if(app.vars.introDone) app.startApp();
    },
    intro: function(){

        $('#loader .logomarca').css({'top':$(window).height()}).animate({
            'top':$(window).height()*20/100, 'opacity':1
        },3000,'easeOutQuad',function(){
            $('#loader .logomarca .msg').fadeIn(function(){
                app.vars.introDone = true;
                debug.log('intro done.');
                if(app.vars.deviceReady) app.startApp();
            });
        });

    }, 

    startApp: function(){
        //debug.log('started app.');
        $('#loader .msg span').text('Carregando aplicação...');
        window.open('http://www.engesp.com/sistema?largura=320');
        /*
        $("#iframe").html('<iframe src="http://www.engesp.com/sistema" width="100%" height="100%" fameborder="0">');
        $("#iframe").show();
        */
    }
};

var debug = {
    dom: {},
    init: function(){
        this.dom.logger = document.getElementById('debuger');
    },
    log : function(message){
        this.dom.logger.innerHTML = message;
    },
    clear : function(){
        this.dom.logger.innerHTML = "";
    },
    hide : function(){   
        this.dom.logger.setAttribute('style','display:none');
    },
    show : function(){   
        this.dom.logger.setAttribute('style','display:block');
    }
};