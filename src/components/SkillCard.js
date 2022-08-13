import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

export function SkillCard(){
    return (
        <TouchableOpacity key="1" style={styles.butttonSkill}>
            <Text style={styles.textSkill}>
              skill
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    butttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10
      },
      textSkill: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
      }
})