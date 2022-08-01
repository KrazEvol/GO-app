import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

var url = "http://127.0.0.1:5000/status";


   export const getSearchResult=(Search)=>{
       console.log("In the Api Funtion----------------")
        axios.get(`http://192.168.1.67:9888/search?q=${Search}`).then((response)=>{
            console.log("its working")
            console.log("succes axios :",response.data);
            console.log("its working")
            return response.data
        }).catch((error)=>{
            console.log("fail axios :", error.response);
        });
    };

    