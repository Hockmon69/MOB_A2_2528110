import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { theme } from '../theme/theme';

interface AvatarPickerProps {
  imageUri: string | null;
  onImageSelected: (uri: string | null) => void;
  onFeedbackMessage?: (msg: string) => void;
}

export const AvatarPicker: React.FC<AvatarPickerProps> = ({
  imageUri,
  onImageSelected,
  onFeedbackMessage,
}) => {
  const notify = (msg: string) => {
    if (onFeedbackMessage) {
      onFeedbackMessage(msg);
    }
  };

  const handlePickFromGallery = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          'Permission Required',
          'Access to the photo gallery is required to choose a profile image. You can grant access from your device settings.',
          [{ text: 'OK' }]
        );
        notify('Gallery permission denied by user.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (result.canceled) {
        notify('Gallery selection canceled.');
        return;
      }

      if (result.assets && result.assets.length > 0) {
        const selectedUri = result.assets[0].uri;
        onImageSelected(selectedUri);
        notify('Profile image updated from gallery.');
      }
    } catch (error) {
      console.error('Error selecting image from gallery:', error);
      Alert.alert('Error', 'An unexpected error occurred while picking the image.');
      notify('Failed to pick image.');
    }
  };

  const handleCaptureCamera = async () => {
    try {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          'Camera Permission Required',
          'Camera access is required to take a profile picture. Please enable it in Android device settings.',
          [{ text: 'OK' }]
        );
        notify('Camera permission denied.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (result.canceled) {
        notify('Camera capture canceled.');
        return;
      }

      if (result.assets && result.assets.length > 0) {
        const capturedUri = result.assets[0].uri;
        onImageSelected(capturedUri);
        notify('New photo captured and set as profile image.');
      }
    } catch (error) {
      console.error('Error capturing image with camera:', error);
      Alert.alert('Error', 'Could not open camera.');
      notify('Failed to capture photo.');
    }
  };

  const handleRemovePhoto = () => {
    Alert.alert(
      'Remove Photo',
      'Are you sure you want to remove your custom profile photo and revert to the default avatar?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            onImageSelected(null);
            notify('Custom profile photo removed. Default avatar restored.');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container} accessible={true} accessibilityRole="summary">
      <View style={styles.avatarWrapper}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={styles.avatarImage}
            accessibilityLabel="Current profile photograph"
          />
        ) : (
          <Image
            source={require('../../assets/default-avatar.png')}
            style={styles.avatarImage}
            accessibilityLabel="Default student avatar"
          />
        )}
      </View>

      <Text style={styles.pickerCaption}>
        {imageUri ? 'Custom photo active' : 'Default avatar active'}
      </Text>

      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={[styles.actionBtn, styles.primaryActionBtn]}
          onPress={handlePickFromGallery}
          accessibilityRole="button"
          accessibilityLabel="Select photo from device gallery"
        >
          <Text style={styles.primaryActionText}>Choose from Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, styles.secondaryActionBtn]}
          onPress={handleCaptureCamera}
          accessibilityRole="button"
          accessibilityLabel="Capture photo using camera"
        >
          <Text style={styles.secondaryActionText}>Take Photo</Text>
        </TouchableOpacity>

        {imageUri && (
          <TouchableOpacity
            style={[styles.actionBtn, styles.removeActionBtn]}
            onPress={handleRemovePhoto}
            accessibilityRole="button"
            accessibilityLabel="Remove photo and revert to default avatar"
          >
            <Text style={styles.removeActionText}>Remove</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    paddingHorizontal: theme.spacing.md,
  },
  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    overflow: 'hidden',
    backgroundColor: theme.colors.surface,
    marginBottom: theme.spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  pickerCaption: {
    fontSize: 13,
    color: theme.colors.textMuted,
    marginBottom: theme.spacing.md,
  },
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing.xs,
  },
  actionBtn: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
    margin: 2,
  },
  primaryActionBtn: {
    backgroundColor: theme.colors.primaryLight,
  },
  primaryActionText: {
    color: theme.colors.primaryDark,
    fontSize: 13,
    fontWeight: '600',
  },
  secondaryActionBtn: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  secondaryActionText: {
    color: theme.colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  removeActionBtn: {
    backgroundColor: theme.colors.dangerLight,
  },
  removeActionText: {
    color: theme.colors.danger,
    fontSize: 13,
    fontWeight: '600',
  },
});
