import { StyleSheet,Text, View, SafeAreaView, Pressable } from "react-native"
import React, { useEffect } from 'react'
import { LinearGradient } from "expo-linear-gradient"
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
//attempt 2 
const LoginScreen=() =>{
return(
        <>
        <LinearGradient colors={["#040306","#131624"]} style={{flex:1}}>
            <SafeAreaView> 
                <View style={{height:80}}/>
                <Entypo style={{textAlign:"center"}} name="spotify" size={80} color="white" />
                <Text style={{color:"white",fontSize:40,fontWeight:"bold", textAlign:"center",marginTop:"70px", paddingTop:"40px"}}> Scuffed songs on Spotify Clone!</Text>
                <View style={{height:80}}/>
                <Pressable style={{backgroundColor:"#1DB954",padding:10,marginLeft:"auto",marginRight:"auto",width:300,borderRadius:25, alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}> Sign in with spotify</Text>
                </Pressable>
                <View style={{height:50}}/>
                <Pressable style={{backgroundColor:"#131624",padding:10,marginLeft:"auto",marginRight:"auto",width:300,borderRadius:25, alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:"white",textAlign:"center"}}> <AntDesign name="google" size={20} color="white"/>  <Text>Continue with Google Account</Text></Text>
                </Pressable>
                <View style={{height:50}}/>
                <Pressable style={{backgroundColor:"#131624",padding:10,marginLeft:"auto",marginRight:"auto",width:300,borderRadius:25, alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:"white",textAlign:"center"}}> <AntDesign name="apple1" size={24} color="white" />   Continue with Apple Account</Text>
                </Pressable>
                <View style={{height:50}}/>
                <Pressable style={{backgroundColor:"#131624",padding:10,marginLeft:"auto",marginRight:"auto",width:300,borderRadius:25, alignItems:"center"}}>
                <Text style={{fontWeight:"bold" , color:"white",textAlign:"center"}}><AntDesign name="mobile1" size={24} color="white" /> Continue with Mobile Number</Text>
                    
                </Pressable>

             </SafeAreaView>
        </LinearGradient>
        
        </>
    )
}

export default LoginScreen
const styles= StyleSheet.create({})