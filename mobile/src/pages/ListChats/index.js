import React, { useState } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

import Header from '../../components/Header';

export default function ListChats() {
  const [selectedInput, setSelectedInput] = useState(false);

  const navigation = useNavigation();

  function handleNavigateToChat(contact = {}) {
    navigation.navigate('Chats', contact);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View
        style={styles.searchContainer}
      >
        <TouchableOpacity>
          <Icon 
            name="search"
            size={20}
            style={styles.icon}
            color="#B2B2B2"
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Procurar um contato"
          placeholderTextColor="#B2B2B2"
          underlineColorAndroid="transparent"
          onTouchEnd={() => setSelectedInput(true)}
        />

        {selectedInput && 
          <TouchableOpacity>
            <Icon
              style={{ marginRight: 16 }}
              name="x"
              size={20}
              color="#B2B2B2"
            />
          </TouchableOpacity>
        }
      </View>

      <ScrollView
        style={styles.contacts}
        contentContainerStyle={{ 
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          style={styles.contact}
          activeOpacity={0.5}
          onPress={() => handleNavigateToChat({ name: 'Eduarda', image_url: 'https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg'})}
        >
          <Image 
            style={styles.image}
            source={{ uri: 'https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg'}}
          />

          <View style={styles.contactInfo}>
            <View>
              <Text style={styles.name}>Eduarda</Text>
              <Text style={styles.message}>Hi, what's up?</Text>
            </View>
            
            <View>
              <Text style={styles.time}>9:30 pm</Text>
              <Text style={styles.totMessage}>1</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contact}
          activeOpacity={0.5}
          onPress={() => handleNavigateToChat({ name: 'Eduarda', image_url: 'https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg'})}
        >
          <Image 
            style={styles.image}
            source={{ uri: 'https://img.freepik.com/fotos-gratis/jovem-mulher-doutora-na-mesa_23-2147767624.jpg?size=626&ext=jpg'}}
          />

          <View style={styles.contactInfo}>
            <View>
              <Text style={styles.name}>Dr. Jhennifer</Text>
              <Text style={styles.message}>Okay</Text>
            </View>
            
            <View>
              <Text style={styles.time}>9:30 pm</Text>
            </View>
          </View>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
}