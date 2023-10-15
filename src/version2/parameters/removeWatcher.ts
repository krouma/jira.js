export interface RemoveWatcher {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /**
   * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example,
   * _5b10ac8d82e05b22cc7d4ef5_. Required.
   */
  accountId?: string;
}
