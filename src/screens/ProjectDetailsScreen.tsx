import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';
import { Badge } from '../components/Badge';
import { STUDENT_PROJECTS } from '../services/storageService';

export const ProjectDetailsScreen: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { projectId } = route.params || {};

  const project = STUDENT_PROJECTS.find((p) => p.id === projectId) || STUDENT_PROJECTS[0];

  const handleOpenLink = async (url?: string) => {
    if (!url) return;
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Notice', 'Cannot open the URL on this device.');
      }
    } catch (e) {
      Alert.alert(
        'Offline Notice',
        'This external link requires an active internet connection. All core project documentation remains available offline.'
      );
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Back button header */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
        accessibilityRole="button"
        accessibilityLabel="Go back to projects list"
      >
        <Text style={styles.backBtnText}>‹ Back to Projects</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.tagline}>{project.tagline}</Text>

      {/* Tech stack badges */}
      <View style={styles.badgesContainer}>
        {project.technology.map((tech, idx) => (
          <Badge key={idx} label={tech} variant="primary" size="md" />
        ))}
      </View>

      {/* Problem Statement Card */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>The Problem</Text>
        <Text style={styles.bodyText}>{project.problem}</Text>
      </View>

      {/* Student Personal Contribution Card */}
      <View style={styles.cardHighlight}>
        <Text style={styles.sectionHeaderHighlight}>Student Contribution</Text>
        <Text style={styles.bodyText}>{project.studentContribution}</Text>
      </View>

      {/* Architecture & Engineering Details */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>System Architecture</Text>
        <Text style={styles.bodyText}>{project.architectureDetails}</Text>
      </View>

      {/* Outcomes & Verifiable Evidence */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Key Verified Outcomes</Text>
        {project.outcomes.map((outcome, idx) => (
          <View key={idx} style={styles.outcomeRow}>
            <Text style={styles.outcomeBullet}>✔</Text>
            <Text style={styles.outcomeText}>{outcome}</Text>
          </View>
        ))}
      </View>

      {/* External Repository Link with Explicit Offline Label */}
      {project.githubUrl && (
        <View style={styles.externalCard}>
          <Text style={styles.externalTitle}>Optional External Repository</Text>
          <Text style={styles.externalWarning}>
            (Requires Internet Connection • Core content is preserved offline)
          </Text>
          <TouchableOpacity
            style={styles.externalBtn}
            onPress={() => handleOpenLink(project.githubUrl)}
            accessibilityRole="link"
            accessibilityLabel="Open project repository on GitHub (requires internet)"
          >
            <Text style={styles.externalBtnText}>View Source on GitHub ↗</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxxl,
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.xs,
  },
  backBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.textPrimary,
    lineHeight: 28,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    ...theme.shadows.sm,
  },
  cardHighlight: {
    backgroundColor: '#F0F9FF',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1.5,
    borderColor: theme.colors.primaryLight,
    ...theme.shadows.sm,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
  },
  sectionHeaderHighlight: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.primaryDark,
    marginBottom: theme.spacing.sm,
  },
  bodyText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 21,
  },
  outcomeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  outcomeBullet: {
    color: theme.colors.success,
    fontSize: 14,
    marginRight: 8,
    marginTop: 2,
  },
  outcomeText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    flex: 1,
  },
  externalCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginTop: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  externalTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  externalWarning: {
    fontSize: 12,
    color: theme.colors.warning,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
  },
  externalBtn: {
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    paddingVertical: theme.spacing.sm,
    alignItems: 'center',
  },
  externalBtnText: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
});
