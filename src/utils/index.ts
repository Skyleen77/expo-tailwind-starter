import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (value: string, allergens: Allergen[]) => {
  try {
    await AsyncStorage.setItem(
      '@user_profile',
      JSON.stringify({ name: value, allergens }),
    );
  } catch (e) {
    alert('Erreur de sauvegarde des données');
  }
};

export const loadData = async () => {
  try {
    const value = await AsyncStorage.getItem('@user_profile');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    alert('Erreur de chargement des données');
  }
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem('@user_profile');
  } catch (e) {
    alert('Erreur de suppression des données');
  }
};
