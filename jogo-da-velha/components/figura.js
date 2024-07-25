
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'


export default function Figura({ vetor, posicao, clicado }) {
  const getIcon = () => {
    if (vetor [posicao] !== 0) {
      return vetor[posicao] ? "drop" : "cup";
    }
    return "pencil";
  };
  return (
    <TouchableOpacity onPress={clicado}>
        <Entypo name={getIcon()} size={80} color="#000" />
    </TouchableOpacity>
  )
}
