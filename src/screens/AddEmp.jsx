import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomeTextInput from '../componenets/CustomeTextInput';
import {createEmployee} from '../service/EmployeeService';
import {useNavigation} from '@react-navigation/native';

const AddEmp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const saveDate = () => {
    const employee = {firstName, lastName, email};
    console.log(employee);

    createEmployee(employee).then(response => {
      console.log(response.data);
      navigation.goBack();
    });

    console.log('saved');
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
            color: '#F58D4C',
            // borderWidth: 1,
            alignSelf: 'center',
            margin: 20,
          }}>
          Add Employee
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
          backgroundColor: '#F58D4C',
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: '700',
          }}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddEmp;

const styles = StyleSheet.create({});
