# 使用 Rust 官方镜像作为构建基础
FROM rust:1.81 AS builder

# 安装 CMake 和其他必要的构建工具
RUN apt-get update && apt-get install -y cmake libssl-dev pkg-config

# 设置工作目录
WORKDIR /usr/src/app

# 复制整个工作空间
COPY . .

# 构建项目
RUN cargo build --release -p capture

# 创建最终镜像
FROM debian:bookworm-slim

# 安装运行时依赖
RUN apt-get update && apt-get install -y libssl3 ca-certificates && rm -rf /var/lib/apt/lists/*

# 复制构建的二进制文件
COPY --from=builder /usr/src/app/target/release/capture /usr/local/bin/capture

# 设置容器启动命令
CMD ["capture"]