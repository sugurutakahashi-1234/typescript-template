# TypeScript Template

モダンなTypeScriptプロジェクトテンプレート。ベストプラクティスと必須ツールを含んでいます。

## Repository Initial Setup

このテンプレートから新しいリポジトリを作成する際は、以下の設定を行ってください：

### 1. 外部アプリの許可

https://github.com/settings/installations で以下のアプリを許可：
- **Codecov** - コードカバレッジレポート
- **Renovate** - 依存関係の自動更新
- **sugurutakahashi-github-bot** - カスタムGitHub自動化

### 2. ブランチ保護設定

mainブランチの保護設定：
- Settings → Branches へ移動
- `main` ブランチのルールを追加
- 必要なステータスチェックを有効化
- マージ前のレビュー必須を有効化

### 3. GitHub Actions設定

Actionsの権限設定：
- Settings → Actions → General へ移動
- "Allow GitHub Actions to create and approve pull requests" にチェック
- その他のオプションはチェックしない

### 4. マージ設定

マージオプションの設定：
- Settings → General → Pull Requests へ移動
- "Allow squash merging" のみ有効化
- コミットメッセージを "Pull request title and description" に設定
- その他のマージ方法は無効化

### 5. NPM_TOKENの発行

NPMアクセストークンの生成：
1. https://www.npmjs.com/ にアクセス
2. Access Tokens → Generate New Token へ移動
3. 全パッケージへのアクセスを許可
4. 生成されたトークンをコピー

### 6. CODECOV_TOKENの発行

Codecovトークンの生成：
1. https://app.codecov.io/gh/sugurutakahashi-1234 にアクセス
2. 対象のリポジトリを選択
3. リポジトリにある特定のトークンをコピー

### 7. GitHub Secretの登録

以下のシークレットをリポジトリに登録（Settings → Secrets and variables → Actions）：
- `APP_ID` - 自動化用のGitHub App ID
- `APP_PRIVATE_KEY` - GitHub Appのプライベートキー
- `NPM_TOKEN` - ステップ5で取得したNPMトークン
- `CODECOV_TOKEN` - ステップ6で取得したCodecovトークン

## Getting Started

初期設定完了後：

```bash
# 依存関係のインストール
bun install

# CIチェックの実行
bun run ci

# 開発サーバーの起動
bun run dev
```

## Scripts

- `bun run ci` - 全チェック実行（format、typecheck、lint、build、test）
- `bun run dev` - 開発サーバー起動
- `bun run build` - プロジェクトのビルド
- `bun run test` - テストの実行
- `bun run lint` - リンティング
- `bun run typecheck` - TypeScript型チェック

## License

MIT