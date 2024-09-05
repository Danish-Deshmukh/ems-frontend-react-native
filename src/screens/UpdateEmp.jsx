import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomeTextInput from '../componenets/CustomeTextInput';
import {updateEmployee} from '../service/EmployeeService';
import {useNavigation} from '@react-navigation/native';

const UpdateEmp = item => {
  const navigation = useNavigation();
  // const {params} = this.props.id
  // console.log(params.id)
  const employee = item.route.params;

  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [email, setEmail] = useState(employee.email);

  const saveDate = () => {
    const employeee = {firstName, lastName, email};
    // console.log(employeee);
    // console.log(employee.id);
    updateEmployee(employee.id, employeee).then(response => {
      // console.log(response.data);
      navigation.goBack();
    });
  };
  return (
    <View
      style={{
        padding: 20,
        minHeight: '100%',
      }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'green',
            // borderWidth: 1,
            alignSelf: 'center',
            margin: 20,
          }}>
          Update Employee
        </Text>
      </View>
      <CustomeTextInput
        title={'First Name'}
        value={firstName}
        placeholder={'Enter First Name here'}
        onChangeText={text => setFirstName(text)}
      />
      <CustomeTextInput
        title={'Last Name'}
        value={lastName}
        onChangeText={text => setLastName(text)}
        placeholder={'Enter Last Name here'}
      />
      <CustomeTextInput
        title={'Email Address'}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder={'Enter Your Email here'}
      />

      <TouchableOpacity
        onPress={() => saveDate()}
        style={{
          padding: 10,
          margin: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'green',
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: '700',
          }}>
          UPDATE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateEmp;

const styles = StyleSheet.create({});
