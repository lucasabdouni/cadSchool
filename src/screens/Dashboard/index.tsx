import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';

import { CardView, Container, Form, Icon, Title } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, FlatList } from 'react-native';

interface SchoolProps {
  name: string;
  code: string;
  id: string;
}

export function Dashboard() {
  const [school, setSchool] = useState<SchoolProps[]>([]);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  async function LoadingStorage() {
    const response = await AsyncStorage.getItem('@schoolStorage');
    const schoolCad = response ? JSON.parse(response) : [];

    setSchool(schoolCad);
  }

  useEffect(() => {
    LoadingStorage();
  }, []);

  async function handleSubmit() {
    const data = {
      name,
      code,
      id: new Date().getTime().toString(),
    };

    if (data.name === '' || data.code === '') {
      Alert.alert('Verifique os dados inseridos');
      return;
    }

    const codeVerify = school.find((school) => school.code === data.code);

    if (codeVerify) {
      Alert.alert('Codigo ja utilizado');
      return;
    }

    const dataFormatted = [...school, data];
    setSchool(dataFormatted);

    await AsyncStorage.setItem('@schoolStorage', JSON.stringify(dataFormatted));
    setName('');
    setCode('');
  }

  async function handleDelet(id: string) {
    const schoolRemoved = school.filter((school) => school.id !== id);
    setSchool(schoolRemoved);

    await AsyncStorage.setItem('@schoolStorage', JSON.stringify(schoolRemoved));
  }

  return (
    <Container>
      <Icon name="user" />
      <Title>Schooling record</Title>
      <Form>
        <Input
          placeholder="Name of schooling"
          onChangeText={setName}
          value={name}
        />
        <Input
          placeholder="Schooling Code"
          onChangeText={setCode}
          value={code}
        />

        <Button title="To send" onPress={handleSubmit} />
      </Form>

      <CardView>
        <FlatList
          data={school}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card data={item} onPress={() => handleDelet(item.id)} />
          )}
        />
      </CardView>
    </Container>
  );
}
