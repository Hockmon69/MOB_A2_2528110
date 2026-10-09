import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';
import { OfflineBanner } from '../components/OfflineBanner';

export const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OfflineBanner compact />

      <Text style={styles.pageTitle}>About & Release Information</Text>
      <Text style={styles.pageSubtitle}>
        INES-Ruhengeri SWE 3409 Mobile Application Development — Individual Assignment 2
      </Text>

      {/* Verification Card (Feature 9 & Demo Video Requirement) */}
      <View style={styles.verificationCard} accessible={true} accessibilityRole="summary">
        <Text style={styles.cardHeader}>Individual Verification Card</Text>
        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Application Name:</Text>
          <Text style={styles.infoValue}>FCPortfolio</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Student Full Name:</Text>
          <Text style={styles.infoValue}>Fajwan Chanjwok</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Registration Number:</Text>
          <Text style={styles.infoValue}>25/28110</Text>
        </View>

        <View style={styles.infoRowHighlight}>
          <Text style={styles.infoLabelHighlight}>Verification Code:</Text>
          <Text style={styles.verificationCode}>MOB-A2-8110</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Application Version:</Text>
          <Text style={styles.infoValue}>v1.0.0 (Release Build)</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Android Package ID:</Text>
          <Text style={styles.infoValueSmall}>rw.ac.ines.ug2528110.fcportfolio</Text>
        </View>
      </View>

      {/* Required Data-Use Statement */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Data-Use & Privacy Statement</Text>
        <Text style={styles.statementText}>
          This application operates completely offline and adheres to academic privacy standards. All editable profile information, user input, and custom image references are persisted locally and exclusively on the host device using sandboxed AsyncStorage. No analytics, tracking beacons, passwords, authentication tokens, or personal identifiers are collected, transmitted, or shared with external servers.
        </Text>
      </View>

      {/* Academic Environment Info */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Academic Institution</Text>
        <Text style={styles.bodyText}>
          Institut d'Enseignement Supérieur de Ruhengeri (INES-Ruhengeri)
        </Text>
        <Text style={styles.bodySubtext}>
          Department of Software Engineering • Faculty of Applied Fundamental Sciences
        </Text>
        <Text style={styles.bodySubtext}>
          Course: SWE 3409 Mobile Application Development
        </Text>
      </View>
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
    fontSize: 13,
    color: theme.colors.textSecondary,
    lineHeight: 18,
    marginBottom: theme.spacing.lg,
  },
  verificationCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    ...theme.shadows.md,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.primaryDark,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  divider: {
    height: 1.5,
    backgroundColor: theme.colors.borderLight,
    marginVertical: theme.spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  infoRowHighlight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    marginVertical: 4,
  },
  infoLabel: {
    fontSize: 13,
    color: theme.colors.textMuted,
    fontWeight: '600',
  },
  infoLabelHighlight: {
    fontSize: 14,
    color: theme.colors.primaryDark,
    fontWeight: '700',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  infoValueSmall: {
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  verificationCode: {
    fontSize: 16,
    fontFamily: 'monospace',
    fontWeight: '800',
    color: theme.colors.primaryDark,
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
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  statementText: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    lineHeight: 19,
  },
  bodyText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  bodySubtext: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginBottom: 2,
  },
});
