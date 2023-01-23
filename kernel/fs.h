#ifndef __KSU_H_FS
#define __KSU_H_FS

#include <linux/fs.h>
#include <linux/version.h>

#if LINUX_VERSION_CODE >= KERNEL_VERSION(4, 14, 0)
#define BUF_IS_VOID_PTR
#define POS_IS_PTR
#endif

static inline ssize_t ksu_kernel_read(struct file *file, void *buf, size_t count, loff_t *pos)
{
#ifdef BUF_IS_VOID_PTR
#define mybuf buf
#else
#define mybuf ((void *) buf)
#endif

#ifdef POS_IS_PTR
	return kernel_read(file, mybuf, count, pos);
#else
	return kernel_read(file, mybuf, count, *pos);
#endif
}

static inline ssize_t ksu_kernel_write(struct file *file, const void *buf, size_t count,
                            loff_t *pos)
{
#ifdef BUF_IS_VOID_PTR
#define mybuf buf
#else
#define mybuf ((void *) buf)
#endif

#ifdef POS_IS_PTR
	return kernel_write(file, mybuf, count, pos);
#else
	return kernel_write(file, mybuf, count, *pos);
#endif
}

#endif
