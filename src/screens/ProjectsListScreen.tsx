import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';
import { ProjectCard } from '../components/ProjectCard';
import { STUDENT_PROJECTS } from '../services/storageService';
import { OfflineBanner } from '../components/OfflineBanner';

export const ProjectsListScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OfflineBanner compact />

      <Text style={styles.pageTitle}>Student Project Portfolio</Text>
      <Text style={styles.pageSubtitle}>
        Evidence of practical software and hardware engineering work. Select any project to inspect full problem statements, student contributions, and technical architecture.
      </Text>

      {STUDENT_PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onPress={() => navigation.navigate('ProjectDetails', { projectId: project.id })}
        />
      ))}
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
  pageTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.textPrimary,
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: theme.spacing.lg,
  },
});
