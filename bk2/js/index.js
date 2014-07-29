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
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
<<<<<<< HEAD
=======
        alert("ondeviceReady funcion");
>>>>>>> 6b7577b2153317fffd2f4162c8c02aa9168c25f7
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
<<<<<<< HEAD
=======
        alert("on receivedEvent funcion");
>>>>>>> 6b7577b2153317fffd2f4162c8c02aa9168c25f7
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
<<<<<<< HEAD

        console.log('Received Event: ' + id);
    }
=======
        if(navigator.geolocation){
            alert("navigator geolocation good");
        }
        console.log('Received Event: ' + id);
        /*navigator.geolocation.getCurrentPosition(positionSuccess,positionError);
        function positionSuccess(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            alert(latitude + " " + longitude);
        }

        function positionError(error){
            alert(1);
            alert(error.message);
        }*/
    },

    positionSuccess : function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            alert(latitude + " " + longitude);
        //document.getElementById("lat").innerHTML = latitude;
        //document.getElementById("lng").innerHTML = longitude;
        alert(0);
    },

    positionError : function(error){
        alert(1);
        alert(error.message);
    }

>>>>>>> 6b7577b2153317fffd2f4162c8c02aa9168c25f7
};
