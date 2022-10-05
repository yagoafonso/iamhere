import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participants = ['Yago', 'Afonso', 'Isabella', 'Jonatan', 'Isa', 'Diego', 'Mayk', 'Francisco', 'Guilherme', 'Ana', 'Caroline'];

  function handleParticipantAdd(){
    if(participants.includes("Yago")){
      return Alert.alert("Participante existe","Já existe um participante na lista com esse nome.")

    }
  }
   function handleParticipantRemove(name: string){
    Alert.alert("Remover",`Remover o participante ${name} ?`,[
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
   }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={item => item} 
        data={participants}
        renderItem={({ item })=> (
          <Participant
          key={item} 
          name={item} 
          onRemove={() => handleParticipantRemove(item)}
        />
        )}
        showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença.
            </Text>
        )}
      />


    </View>
  );
}