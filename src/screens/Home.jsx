import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {deleteEmployee, listEmployees} from '../service/EmployeeService';

const demo = [
  {
    id: 1,
    firstName: 'Danish',
    lastName: 'Deshmukh',
    email: 'danish@gmail.com',
    description:
      'seomthing hellow world how are you waht are you doing what is wrong with you ',
  },
  {
    id: 2,
    firstName: 'Umair',
    lastName: 'patel',
    email: 'umair@gmail.com',
    description:
      'seomthing hellow world how are you waht are you doing what is wrong with you ',
  },
  {
    id: 3,
    firstName: 'Kamil',
    lastName: 'patil',
    email: 'kamil@gmail.com',
    description:
      'seomthing hellow world how are you waht are you doing what is wrong with you ',
  },
];

const Home = () => {
  const [employees, setEmployees] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    getAllEmployees();
    console.log(employees);
  }, []);

  const Card = ({item}) => {
    return (
      <View style={styles.card}>
        <View
          style={{
            // borderWidth: 1,
            marginBottom: 10,
            flexDirection: 'row',
            // justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/user.png')}
            style={{
              height: 50,
              width: 50,
              marginHorizontal: 10,
              // marginBottom: 10,
              // borderWidth: 1
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: 'black',
            }}>
            {item.firstName} {item.lastName}
          </Text>
        </View>
        <Text>Email: {item.email}</Text>
        <Text>Job Description: {item.description}</Text>
        <View
          style={{
            // borderWidth: 1,
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('UpdateEmp',{id:item.id})
              navigation.navigate('UpdateEmp', item);
            }}
            style={{
              // borderWidth: 1,
              borderRadius: 5,
              padding: 4,
              backgroundColor: 'green',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
              }}>
              UPDATE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteEmploye(item.id)}
            style={{
              // borderWidth: 1,
              borderRadius: 5,
              padding: 4,
              // position: 'absolute',
              // right: 4,
              // bottom: 4,
              backgroundColor: 'red',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
              }}>
              DELETE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const getAllEmployees = () => {
    console.log('getallmethodcall');
    listEmployees()
      .then(response => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const deleteEmploye = id => {
    try {
      deleteEmployee(id);
    } catch (error) {
      console.log(error);
    }

    getAllEmployees();
    console.log('DEleted');
  };
  const updateEmployee = item => {
    console.log(item);
  };
  return (
    <View>
      <View>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 5,
            backgroundColor: 'pink',
          }}
          onPress={() => getAllEmployees()}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '500',
            }}>
            REFRESH
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={employees}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <TouchableOpacity
        style={{
          // borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          margin: 10,
          borderRadius: 5,
          backgroundColor: 'lightgreen',
        }}
        onPress={() => {
          navigation.navigate('AddEmp');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '500',
          }}>
          ADD Employee
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    minHeight: '80%',
    // borderWidth: 1,
    backgroundColor: 'gray',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
