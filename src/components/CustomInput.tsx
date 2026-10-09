import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../theme/theme';

interface CustomInputProps extends TextInputProps {
  label: string;
  error?: string | null;
  helperText?: string;
  required?: boolean;
  onClear?: () => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  helperText,
  required = false,
  value,
  onClear,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label} accessible={true} accessibilityRole="text">
          {label} {required && <Text style={styles.requiredAsterisk}>*</Text>}
        </Text>
        {value && onClear && (
          <TouchableOpacity
            onPress={onClear}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            accessibilityLabel={`Clear ${label}`}
            accessibilityRole="button"
          >
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : null,
          props.multiline ? styles.multilineInput : null,
          style,
        ]}
        value={value}
        placeholderTextColor={theme.colors.textMuted}
        accessible={true}
        accessibilityLabel={label}
        accessibilityHint={error || helperText}
        {...props}
      />

      {error ? (
        <Text style={styles.errorText} accessible={true} accessibilityRole="alert">
          {error}
        </Text>
      ) : helperText ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.lg,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  requiredAsterisk: {
    color: theme.colors.danger,
    fontWeight: '700',
  },
  clearText: {
    fontSize: 12,
    color: theme.colors.primary,
    fontWeight: '500',
  },
  input: {
    backgroundColor: theme.colors.card,
    borderWidth: 1.5,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    fontSize: 15,
    color: theme.colors.textPrimary,
    minHeight: 48,
  },
  multilineInput: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: theme.colors.danger,
    backgroundColor: '#FFF5F5',
  },
  errorText: {
    fontSize: 12,
    color: theme.colors.danger,
    marginTop: theme.spacing.xs,
    fontWeight: '500',
  },
  helperText: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginTop: theme.spacing.xs,
  },
});
