import React,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity, Alert,Text,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'
import db from '../config'
export default class Loginscreen extends Component{
    constructor(){
        super();
        this.state={
            loginid:"",
            password:"",
            firstname:"",
            lastname:"",
            address:"",
            contact:"",
            confirmpassword:"",
            isModalVisible:false
        }
    }
    login=(loginid,password)=>{
firebase.auth().signInWithEmailAndPassword(loginid,password).then(()=>{
    return(
        Alert.alert("Successesfully loggedin")
    )
})
.catch((error)=>{
    var errorcode=error.code;
    var errormessage=error.message
    return Alert.alert(errormessage)
    
})
      
    }
    signup=(loginid,password)=>{
        firebase.auth().createUserWithEmailAndPassword(loginid,password).then(()=>{
            return Alert.alert("user signed in")
        })
        .catch((error)=>{
            var errorcode=error.code;
            var errormessage=error.message
            return Alert.alert(errormessage)
            
        })

    }
    showmodal=()=>{
        this.render(
            <Modal
            Visible={this.state.isModalVisible}
            >
                <View>
                    <ScrollView>
                        <KeyboardAvoidingView>
                            <Text>Register</Text>
                            <TextInput placeholder={"First Name"}
                            maxLength={15}
                            onChangeText={(text)=>{
                                this.setState({firstname:text})
                            }}
                            
                            />
                            <TextInput placeholder={"Last Name"}
                            maxLength={15}
                            onChangeText={(text)=>{
                                this.setState({lastname:text})
                            }}
                            
                            />
                            <TextInput placeholder={"Address"}
                             multiline={true}
                            onChangeText={(text)=>{
                                this.setState({address:text})
                            }}
                            
                            />
                            <TextInput placeholder={"Contact"}
                            maxLength={15}
                            keyboardType={"numeric"}
                            onChangeText={(text)=>{
                                this.setState({contact:text})
                            }}
                            
                            />
                            <TextInput placeholder={"Login id"}
                           
                            onChangeText={(text)=>{
                                this.setState({loginid:text})
                            }}
                            
                            />
                               <TextInput placeholder={"Password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({password:text})
                            }}
                            
                            />
                               <TextInput placeholder={"Confirm Password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({confirmpassword:text})
                            }}
                            
                            />
                            <View>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({"isModalVisible":false})
                                    
                                }}>
                                <Text>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                {this.showmodal()}
                <TextInput placeholder="Login id"
                 keyboardType="email-address"
                 onChangeText={(text)=>{
                  this.setState({loginid:text})
                 }}
                 
                 />
                 <TextInput placeholder="password"
                 secureTextEntry={true}
                 onChangeText={(text)=>{
                  this.setState({password:text})
                 }}
                 />
                 <TouchableOpacity onPress={()=>{
                   this.login(this.state.loginid,this.state.password)
                 }}><Text>Login</Text></TouchableOpacity>
                 
                 <TouchableOpacity onPress={()=>{
                     this.setState({isModalVisible:true})
                    }}><Text>Signup</Text></TouchableOpacity>
   
            </View>
        )
    }
}
const styles=StyleSheet.create({
     container:{flex:1,alignItem:"center",justifyContent:"center"},
     text:{},
})
